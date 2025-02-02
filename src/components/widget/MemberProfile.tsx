import type { getMemberProps } from "@/core/types";
import { DeleteIcon } from "@/assets/icons";
import SkillTags from "./SkillTags";
import useDominantColor from "@/hooks/useDominatColor";
import Button, { ButtonStyle } from "../common/Button";
import { GithubIcon } from "@/assets/icons";
import { formatDate } from "@/utils/formatDate";
import { useMembers } from "@/hooks/useMembers";
import styles from "./styles/MemberProfile.module.scss";
import icono from "@/assets/icon.ico";

interface memberProfileProps {
  member: getMemberProps;
  width: number;
}

const MemberProfile: React.FC<memberProfileProps> = ({
  member,
  width,
}) => {
  const { setSelectedMember } = useMembers();
  const { image, name, description, tags, createdAt, banner, github } = member;

  const tagNames = tags.map((tag) => tag.name);

  const dominantColor = useDominantColor(image);

  const formattedDate = formatDate(createdAt);

  return (
    <>
      <div
        className={styles.container}
        style={{ width: `${width}px`, maxWidth: `${width}px` }}
      >
        <div className={styles.container__actions}>
          <div
            className={styles.container__actions__icon}
            onClick={() => setSelectedMember(null)}
          >
            <DeleteIcon className={"medium-icon"} />
          </div>
        </div>
        <header className={styles.header}>
          <svg className={styles.header__bannerContainer}>
            <defs>
              <mask id="user-mask">
                <rect
                  fill="white"
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                ></rect>
                <circle fill="black" cx="52" cy="97" r="46"></circle>
              </mask>
            </defs>
            <foreignObject
              x="0"
              y="0"
              width="100%"
              height="100%"
              overflow="visible"
              mask="url(#user-mask)"
            >
              <div
                className={styles.header__bannerContainer__banner}
                style={{
                  backgroundColor: banner ? "transparent" : dominantColor,
                  backgroundImage: banner ? `url(${banner})` : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </foreignObject>
          </svg>

          <div className={styles.header__imageContainer}>
            <div className={styles.header__imageContainer__image}>
              <img src={image} alt={name} />
            </div>
          </div>
        </header>

        <div className={styles.body}>
          <div className={styles.body__info}>
            <div className={styles.body__info__name}>
              <span>{name}</span>
            </div>
            <div className={styles.body__info__description}>
              <span>{description}</span>
            </div>
          </div>
          <div className={styles.body__info__languages}>
            <h1>Lenguajes</h1>
            <SkillTags tags={tagNames} />
          </div>
          <div className={styles.body__info__date}>
            <h1>Miembro desde</h1>
            <div className={styles.date}>
              <img src={icono} alt="korxteam" style={{ height: "14px" }} />
              <span>{formattedDate}</span>
            </div>
          </div>
          <div className={styles.body__info__socials}>
            <h1>Conexiones</h1>
            <div style={{ marginTop: "1rem" }}>
              <Button
                backgroundColor="var(--decorative-subdued)"
                styleType={ButtonStyle.ICON_TEXT}
                label="Github"
                href={github}
                redirect
                iconMargin="0 5px 0 0"
                borderRadius="4px"
                padding="10px 20px"
              >
                <GithubIcon className={"small-icon"} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberProfile;
