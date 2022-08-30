import React from 'react'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar,
  Typography,
  useTheme
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Moreover from '@material-ui/icons/MoreVert'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import StarRateIcon from '@material-ui/icons/StarRate'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports'
import MovieIcon from '@material-ui/icons/Movie'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import LiveTvIcon from '@material-ui/icons/LiveTv'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'
import YouTubeIcon from '@material-ui/icons/YouTube'
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo'
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined'
import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined'
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined'
import AnnouncementOutlinedIcon from '@material-ui/icons/AnnouncementOutlined'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'

import useStyles from './styles'
import videos from '../data'

function Home() {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Box className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.MenuIcon}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <img
            src={
              theme.palette.type === 'dark'
                ? '/images/branco.png'
                : '/images/preto.png'
            }
            alt="Logo"
            className={classes.logo}
          />

          <Box className={classes.grow} />

          <Hidden mdDown>
            <Box style={{ display: 'flex' }}>
              <Box className={classes.search}>
                <InputBase
                  placeholder="Pesquisar"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Box>

              <Box>
                <button className={classes.searchBarButton}>
                  <SearchIcon />
                </button>
              </Box>
            </Box>

            <IconButton className={classes.icons} style={{ marginLeft: 4 }}>
              <MicIcon />
            </IconButton>
          </Hidden>

          <Hidden smUp>
            <IconButton className={classes.icons}>
              <SearchIcon />
            </IconButton>
          </Hidden>

          <Box className={classes.grow} />

          <IconButton className={classes.icons}>
            <Moreover />
          </IconButton>

          <Hidden smUp>
            <IconButton className={classes.icons}>
              <AccountCircleIcon />
            </IconButton>
          </Hidden>

          <Hidden mdDown>
            <Button
              startIcon={<AccountCircleIcon />}
              variant="outlined"
              color="secondary"
              className={classes.login}
            >
              Fazer Login
            </Button>
          </Hidden>
        </Toolbar>
      </AppBar>

      <Box style={{ display: 'flex' }}>
        <Hidden mdDown>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <Toolbar />

            <Box className={classes.drawerContainer}>
              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Início"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <ExploreOutlinedIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Explorar"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <WhatshotIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Shorts"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <SubscriptionsIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="inscrições"
                  />
                </ListItem>
              </List>

              <Divider />

              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <VideoLibraryIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Biblioteca"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <HistoryIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Histórico"
                  />
                </ListItem>
              </List>

              <Divider />

              <Box className={classes.boxContainer}>
                <Typography variant="body2">
                  Faça login para curtir vídeos, comentar e se inscrever
                </Typography>

                <Box className={classes.boxButton}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<AccountCircleIcon />}
                  >
                    Fazer login
                  </Button>
                </Box>
              </Box>

              <Divider />

              <List>
                <ListSubheader
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  className={classes.subheader}
                >
                  Explorar
                </ListSubheader>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <MusicNoteIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Música"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <StarRateIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Esportes"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <SportsEsportsIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Jogos"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <MovieIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Filmes"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <MenuBookIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Notícias"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <LiveTvIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Ao vivo"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <EmojiObjectsIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Aprender"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon className={classes.iconYouTube}>
                    <YouTubeIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Vídeos do momento"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <SlowMotionVideoIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Vídeos em 360°"
                  />
                </ListItem>
              </List>

              <Divider />

              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <ControlPointOutlinedIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Procurar canais"
                  />
                </ListItem>
              </List>

              <Divider />

              <List>
                <ListSubheader
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  className={classes.subheader}
                >
                  Mais do YouTube
                </ListSubheader>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon className={classes.iconYouTube}>
                    <YouTubeIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="YouTube Premium"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon className={classes.iconYouTube}>
                    <YouTubeIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="YouTube Music"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon className={classes.iconYouTube}>
                    <YouTubeIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="YouTube Kids"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon className={classes.iconYouTube}>
                    <YouTubeIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="YouTube TV"
                  />
                </ListItem>
              </List>

              <Divider />

              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <SettingsOutlinedIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Configurações"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <FlagOutlinedIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Histórico de denúncias"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <HelpOutlineOutlinedIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Ajuda"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AnnouncementOutlinedIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Enviar feedback"
                  />
                </ListItem>
              </List>

              <Divider />

              <List>
                <ListItem li className={classes.listItemBottom}>
                  <ListItemText
                    classes={{ primary: classes.listItemTextBottom }}
                    primary="Sobre Imprensa"
                  />
                </ListItem>

                <ListItem li className={classes.listItemBottom}>
                  <ListItemText
                    classes={{ primary: classes.listItemTextBottom }}
                    primary="Direitos autorais"
                  />
                </ListItem>

                <ListItem li className={classes.listItemBottom}>
                  <ListItemText
                    classes={{ primary: classes.listItemTextBottom }}
                    primary="Entre em contato"
                  />
                </ListItem>

                <ListItem li className={classes.listItemBottom}>
                  <ListItemText
                    classes={{ primary: classes.listItemTextBottom }}
                    primary="Criadores de conteúdo"
                  />
                </ListItem>

                <ListItem li className={classes.listItemBottom}>
                  <ListItemText
                    classes={{ primary: classes.listItemTextBottom }}
                    primary="Desenvolvedores"
                  />
                </ListItem>
              </List>

              <List>
                <ListItem li className={classes.listItemBottom}>
                  <ListItemText
                    classes={{ primary: classes.listItemTextBottom }}
                    primary="Termos Privacidade"
                  />
                </ListItem>

                <ListItem li className={classes.listItemBottom}>
                  <ListItemText
                    classes={{ primary: classes.listItemTextBottom }}
                    primary="Política e segurança"
                  />
                </ListItem>

                <ListItem li className={classes.listItemBottom}>
                  <ListItemText
                    classes={{ primary: classes.listItemTextBottom }}
                    primary="Como funciona o YouTube"
                  />
                </ListItem>

                <ListItem li className={classes.listItemBottom}>
                  <ListItemText
                    classes={{ primary: classes.listItemTextBottom }}
                    primary="Testar os novos recursos"
                  />
                </ListItem>
              </List>

              <Box className={classes.boxContainer}>
                <Typography variant="body2" className={classes.copyright}>
                  © 2022 Google LLC
                </Typography>
              </Box>
            </Box>
          </Drawer>
        </Hidden>

        <Box style={{ padding: '36px' }}>
          <Toolbar />

          <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item key={index} lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <div className={classes.image}>
                    <img
                      className={classes.thumb}
                      src={item.thumb}
                      alt={item.title}
                    />

                    <div className={classes.timer}>06:00</div>
                  </div>

                  <Box>
                    <Grid container spacing={6}>
                      <Grid item lg={2} md={2} sm={2} xs={2}>
                        <Avatar src={item.avatar} alt={item.channel} />
                      </Grid>

                      <Grid item lg={10} md={10} sm={10} xs={10}>
                        <Typography
                          style={{ fontWeight: 600 }}
                          variant="body1"
                          gutterBottom
                          color="textPrimary"
                        >
                          {item.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          display="block"
                          color="textSecondary"
                        >
                          {item.channel}
                        </Typography>

                        <Typography variant="body2" color="textSecondary">
                          {`${item.views} • ${item.date}`}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
