import { projectItems } from '../../data/index'

export const Projects = () => {
  return (
    <div>
        {projectItems.map(({title, description, id}) => (
            <div key={id}>
            <h1>{title}</h1>
            <p>{description}</p>
            </div>
        ))}
    </div>
  )
}
