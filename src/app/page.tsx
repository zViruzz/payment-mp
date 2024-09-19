import { css } from '../../styled-system/css';

export default function Home() {
  return (
    <div 
      className={styles.container}
    >
      <div className={styles.containerForm}>
        <div>
          <h1>
            Hello 🐼!
          </h1>
        </div>
        <div>
          <form action="">
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  }),
  containerForm: css({
    border: '1px solid',
    borderColor: 'gray.500',
    borderRadius: 'xl',
    padding: '20px',
  }),
}