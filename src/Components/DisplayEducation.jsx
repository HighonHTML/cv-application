import '../stylesheets/displayEducation.css'
export default function DisplayEducation({educationData}){
    return(
        <div className="education-section">
            <h4>Education</h4>
            <div className="education-info">
                <div className="left">
                <p>{educationData.startDate} {educationData.startDate && '-'} {educationData.endDate}</p>
                <p>{educationData.location}</p>
                </div>
                <div className="right">
                <p>{educationData.schoolName}</p>
                <p>{educationData.titleOfStudy} </p>

                </div>
            </div>
        </div>
    )
}
