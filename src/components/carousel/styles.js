import { makeStyles } from '@material-ui/core/styles';
import carouselImage1 from '../../image/carousel1.jpg';
import carouselImage2 from '../../image/carousel2.jpg';

export default makeStyles((theme) => ({
  carousel: {
    height: '40rem',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: `calc(100vw + 48px)`,
    margin: '-24px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'center',
    boxShadow: 'none',
  },
  banner1: {
    backgroundImage: `url('${carouselImage1}')`,
  },
  banner2: {
    backgroundImage: `url(${carouselImage2})`,
  },
  carouselContent: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing(16),
  },
  btn: {
    padding: theme.spacing(1.5, 4),
    marginRight: theme.spacing(4),
    transition: 'all .2s ease',
    borderRadius: '0',
    fontWeight: '600',
  },
  btn1: {
    color: '#fff',
    border: '1px solid #000',
    background: '#000',
    '&:hover': {
      color: '#000',
      background: 'transparent',
    },
  },
  btn2: {
    color: '#000',
    border: '1px solid #000',
    '&:hover': {
      color: '#fff',
      background: '#000',
    },
  },
  bannerTitle: {
    fontSize: '65px',
    fontWeight: '400',
    margin: '0',
    color: '#000',
  },
  bannerText: {
    fontSize: '20px',
    lineHeight: '30px',
    width: '35rem',
    margin: '1rem 0 4rem',
  },
}));
