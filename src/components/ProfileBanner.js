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
<<<<<<< HEAD
    <article id="profileBanner" className={`${participant.level}`}>
=======
    <article className={`${participant.level}`}>
>>>>>>> 4862795b9e5269400412d50ecdb9ca013a8d62d4
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