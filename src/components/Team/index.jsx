import { TeamMember } from "../Team Member";
import "./Team.css";

export const Team = (props) => {
  return props.collaborators.length > 0 ? (
    <section className="team" style={{ backgroundColor: props.secondaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <div className="collaborators">
        {props.collaborators.map((collaborator) => (
          <TeamMember
            backgroundColor={props.primaryColor}
            key={collaborator.name}
            name={collaborator.name}
            cargo={collaborator.cargo}
            imagem={collaborator.image}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};
