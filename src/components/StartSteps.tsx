import styles from '../../src/app/styles'

const StartSteps = ({number, text}) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} h-[70px] w-[70px] rounded-[24px] bg-[#323f5d]`}>
      <p className="text-[20px] font-bold text-white">0{number}</p>
    </div>
    <p className="ml-[30px] flex-1 text-[18px] font-normal leading-[32px] text-[#b0b0b0]">{text}</p>
  </div>
)

export default StartSteps
