import { css } from "../../../styled-system/css";

export const styles = {
  productItem: css({
    border: '1px solid #535353',
    rounded: '10px',
    p: '10px',
    display: 'flex',
  }),
  productList: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  }),
  containerDetail: css({
    w: '100%',
    pl: '15px',
    display: 'flex',
    flexDirection: 'column'
  }),
  header: css({
    display: 'flex',
    justifyContent: 'space-between',
  }),
  detail: css({
    flexGrow: 1,
    h: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }),
  image: css({
    rounded: '9px',
  }),
}