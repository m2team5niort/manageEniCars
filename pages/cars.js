import { connectToDatabase } from "../util/mongodb";

export default function cars({ cars }) {
  return (
    <div>
      <h1>Voitures </h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            <h2>id: {car._id}</h2>
            <p>color :{car.color}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {

  const { db } = await connectToDatabase();

  const cars = await db
    .collection("cars")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  return {
    props: {
      cars: JSON.parse(JSON.stringify(cars)),
    },
  };
}