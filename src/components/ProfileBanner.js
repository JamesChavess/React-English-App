import Advanced from "../imgs/advanced.svg"
import HighLevel from "../imgs/highlevel.svg"
import Intermediate from "../imgs/intermediate.svg"
import Beginner from "../imgs/beginner.svg"

export default function ProfileBanner({participant}){
    const imageStruct = {
        Advanced: Advanced,
        HighLevel: HighLevel,
        Intermediate: Intermediate,
        Beginner: Beginner
      }
      
   return (<>{participant && <>
    <article id="profileBanner" className={`${participant.level}`}>
      <img srcSet={imageStruct[participant.level]}  alt="level image" />
      <h1>
        {'Name : ' + participant.Name}
        <br />
        {'Level : ' + participant.level}
      </h1>
      <h1>
        {'Group Rank  : ' + participant.GroupRank}
        <br />
        {'Company Rank : ' + participant.CompanyRank}
      </h1>
    </article>
  </>}</>)
    }