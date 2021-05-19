const Project = ({className, data}) => {
  return (
    <article className={`${className} project`} data-id={data.Id}>
      <h3>{data.Title}</h3>
    </article>
  );
};

export default Project;