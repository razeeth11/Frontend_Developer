export function ComponentTwo() {
  const course = [
    {
      heading: "Interactive Features",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      heading: "Interactive Features",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      heading: "Interactive Features",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      heading: "Interactive Features",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
  ];
  return (
    <div className="component-two">
      <div className="component-two-one">
        {course.map((data, index) => (
          <Course data={data} />
        ))}
      </div>
      <div className="component-two-two">
        <h1 className="component-two-heading">About the course</h1>
        <p className="component-two-para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unkno
        </p>
        <button className="explore-button">Explore Now</button>
      </div>
    </div>
  );
}
function Course({ data }) {
  return (
    <div className="course">
      <p className="course-heading">{data.heading}</p>
      <p className="course-para">{data.content}</p>
    </div>
  );
}
