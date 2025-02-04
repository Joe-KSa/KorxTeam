import React, { useEffect, useCallback } from "react";
import useDominantColor from "@/hooks/useDominatColor";
import { useProjectMembers } from "@/hooks/useProjectMember";
import { useMembers } from "@/hooks/useMembers";
import { useProjects } from "@/hooks/useProjects";
import styles from "./styles/TableMember.module.scss";
import image from "@/assets/LoadingMembers.gif";
import { getMemberProps } from "@/core/types";

const TableMembers: React.FC<{ isProjectCardVisible: boolean }> = ({
  isProjectCardVisible,
}) => {
  const { members, loadMembers, setSelectedMember } = useMembers();
  const { projectMembers, loadProjectMembers } = useProjectMembers();
  const { selectedProject, projectBanner } = useProjects();

  const dominantColor = useDominantColor(projectBanner?.image);

  useEffect(() => {
    if (selectedProject?.id) {
      loadProjectMembers(selectedProject.id);
    } else {
      loadMembers();
    }
  }, [selectedProject, loadProjectMembers, loadMembers]);

  const currentMembers = selectedProject ? projectMembers : members;

  const handleUserClick = useCallback((user: getMemberProps) => {
    setSelectedMember(user);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container__inner}>
        <div
          className={styles.container__inner__mask}
          style={{ backgroundColor: dominantColor || "transparent" }}
        ></div>
        <div className={styles.table}>
          {/* Header */}
          <div
            className={`${styles.table__headerContainer} ${
              isProjectCardVisible ? styles.desactive : styles.active
            }`}
          >
            <div
              className={`${styles.header} ${
                isProjectCardVisible ? styles.header__border : ""
              }`}
            >
              <div className={styles.header__item} style={{ textAlign: "end" }}>
                #
              </div>
              <div className={styles.header__item}>Nombre</div>
              <div className={styles.header__item}>Rol</div>
            </div>
          </div>
          <div className={styles.body}>
            {currentMembers.length === 0 ? (
              <div className="no-items-message" style={{ marginTop: "4em" }}>
                <div className="no-items-container">
                  <img src={image} alt="MemberGif" />
                  <span>Buscando miembros</span>
                </div>
              </div>
            ) : (
              currentMembers.map((member, index) => (
                <div role="row" aria-rowindex={index + 2} key={index}>
                  <div
                    key={member.id}
                    className={styles.body__row}
                      onClick={() => handleUserClick(member)}
                  >
                    {/* Índice */}
                    <div
                      aria-colindex={1}
                      className={`${styles.body__row__item} ${styles.body__row__item__index}`}
                    >
                      <div>
                        <span>{index + 1}</span>
                      </div>
                      {/* <div
                          className="member-remove"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteClick(member.id, member.publicId);
                          }}
                        >
                          <DeleteIcon className="medium" />
                        </div> */}
                    </div>

                    {/* Nombre e imagen del usuario */}
                    <div
                      aria-colindex={2}
                      className={`${styles.body__row__item} ${styles.body__row__item__member}`}
                    >
                      <img
                        className={styles.body__row__item__member__image}
                        src={member.image}
                        alt={member.name}
                      />

                      <span className={styles.body__row__item__member__name}>
                        {member.name}
                      </span>
                    </div>

                    {/* Rol del usuario */}
                    <div
                      aria-colindex={3}
                      className={`${styles.body__row__item} ${styles.body__row__item__role}`}
                    >
                      {member.role.name}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableMembers;
