
import styles from './styles/Navbar.module.scss'
import { Search } from '@/components/widget/Search'
import Button, { ButtonStyle} from '@/components/common/Button';
import { DiscordIcon } from '@/assets/icons'
import image from "@/assets/KorxteamIcon.png"

const Navbar = () => {
  return (
    <>
      <div className={styles.containerLogo}>
        <a href="" className={styles.containerLogo__icon} title='home'>
          <img src={image} alt="" />
        </a>
      </div>
      <Search />
      <div className={styles.containerButtons}>
        <Button styleType={ButtonStyle.ICON_TEXT} label='Discord' iconMargin='0 5px 0 0' hover redirect href='https://discord.com/invite/fhjm8rJAf5'>
          <DiscordIcon className='medium-icon' />
        </Button>
      </div>
    </>
  )
}

export default Navbar;