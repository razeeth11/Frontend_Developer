export function BodyTwo() {
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
    <div className="body-two">
      <div className="body-two-one">
        {course.map((data, index) => (
          <Course data={data} />
        ))}
      </div>
      <div className="body-two-two">
        <h1>About the course</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unkno
        </p>
        <button className="gradient-button-two">Explore Now</button>
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
