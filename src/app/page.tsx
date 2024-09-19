import { css } from '../../styled-system/css';

const container = css({
  bg: 'red.500',
  _hover: { bg: 'red.700' },
  _active: { bg: 'red.900' }
})


export default function Home() {
  return (
    <div 
      className={container}
    >
      <div >
        Hello 🐼!
      </div>
      <span>NO</span>
    </div>
  )
}