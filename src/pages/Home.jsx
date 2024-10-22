import React from "react";
import Layouts from "../layouts/Layouts";
import Lists from "../components/Lists";

const Home = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [data]);

  // console.log(data);

  return (
    <Layouts>
      <div className="blog-list">
        {data && data.map((d) => <Lists {...d} key={d.id}></Lists>)}
      </div>
    </Layouts>
  );
};

export default Home;
