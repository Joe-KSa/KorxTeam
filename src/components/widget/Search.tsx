import styles from "./styles/Search.module.scss";
import Button, { ButtonStyle} from "../common/Button";
import { HomeIcon, SearchIcon, ProjectIcon } from "../../assets/icons";

export const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchContainer__inner}>
        <div className={styles.searchContent}>
          {/* Botón de inicio visible siempre */}
          <Button
            styleType={ButtonStyle.ICON}
            backgroundColor="var(--background-elevated-base)"
            borderRadius="50%"
            hover
            href="/"
            redirect
          >
            <HomeIcon className="large-icon" />
          </Button>

          {/* Contenedor principal de búsqueda */}
          <div className={styles.searchFormWrapper}>
            <form action="" role="search">
              {/* Botón de búsqueda para móvil */}
              <div className={styles.mobileSearchTrigger}>
                <Button
                  styleType={ButtonStyle.ICON}
                  borderRadius="50%"
                  backgroundColor="var(--background-elevated-base)"
                >
                  <SearchIcon className="large-icon" />
                </Button>
              </div>

              {/* Icono de búsqueda para desktop */}
              <div className={styles.desktopSearchIcon}>
                <SearchIcon className="large-icon" />
              </div>

              {/* Input y elementos relacionados (visible en desktop) */}
              <div className={styles.searchInputContainer}>
                <input
                  type="text"
                  className={styles.searchInput}
                  placeholder="¿Qué quieres buscar?"
                />
                <div className={styles.inputPlaceholderHelper}>
                  <span>¿Qué quieres buscar?</span>
                </div>
              </div>

              <div className={styles.projectsButtonContainer}>
                <div className={styles.projectsButtonContainer__inner}>
                  <Button styleType={ButtonStyle.ICON} padding="0" hover href="/project" redirect>
                    <ProjectIcon className="large-icon"/>
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};