import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    height: 'min(100vh)',
    backgroundColor: theme.palette.background.dark
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1
  },
  logo: {
    height: 24
  },
  grow: {
    flexGrow: 1
  },
  search: {
    position: 'relative',
    backgroundColor: theme.palette.background.searchBar,
    width: '40vw',
    border: `1px solid ${theme.palette.borderColor.searchBar}`
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: theme.palette.text,
    width: '100%'
  },
  inputInput: {
    padding: theme.spacing(2.5),
    width: '100%'
  },
  searchBarButton: {
    height: '100%',
    width: 70,
    backgroundColor: theme.palette.background.boxSearchBar,
    border: `1px solid ${theme.palette.borderColor.searchBar}`,
    borderLeft: 'none',
    color: theme.palette.text.primary,
    cursor: 'pointer'
  },
  MenuIcon: {
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3)
  },
  icons: {
    padding: theme.spacing(3)
  },
  login: {
    marginLeft: theme.spacing(4)
  },
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerPaper: {
    width: 250,
    border: 'none'
  },
  listItemText: {
    fontSize: 14
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4
  },
  boxContainer: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 22,
    paddingRight: 22
  },
  boxButton: {
    marginTop: 12
  },
  subheader: {
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  thumb: {
    height: 'max(20vh, 150px)',
    width: '100%'
  },
  image: {
    position: 'relative'
  },
  timer: {
    position: 'absolute',
    bottom: 8,
    right: 4,
    padding: theme.spacing(1, 2),
    backgroundColor: 'rgba(0,0,0,0.8)',
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold'
  },
  iconYouTube: {
    color: theme.palette.primary.main
  },
  listItemBottom: {
    paddingTop: 0,
    paddingBottom: 0,
    height: 'auto'
  },
  listItemTextBottom: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.palette.text.secondary
  },
  copyright: {
    fontSize: 12,
    color: theme.palette.text.secondary
  }
}))

export default useStyles
