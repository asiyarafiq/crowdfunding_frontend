import { useParams } from "react-router-dom";
import useProjects from "../hooks/use-projects";
import useProject from "../hooks/use-project";
import AddPledgePageForm from "../components/AddPledgePageForm";
function ProjectPage() {
  // Here we use a hook that comes for free in react router called `useParams` to get the id from the URL so that we can pass it to our useProject hook.
  const { id } = useParams();
  // useProject returns three     pieces of info, so we need to grab them all h    ere
  const { project, isLoading, error } = useProject(id);
  if (isLoading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  console.log(project, "projects");
  return (
    <div>
      <h2>{project?.title}</h2>
      <h3>Created at: {project?.date_created}</h3>
      <h3>{`Status: ${project?.is_open}`}</h3>
      <h3>Pledges:</h3>
      <p>{project?.description} </p>
      <ul>
        {project?.pledges?.map((pledgeData, key) => {
          return (
            <li key={key}>
              ${pledgeData.amount} from {pledgeData.supporter}
            </li>
          );
        })}
      </ul>
      <AddPledgePageForm />
    </div>
  );
}
export default ProjectPage;
