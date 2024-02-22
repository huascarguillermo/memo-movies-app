import { Card, CardHeader, CardBody } from "@nextui-org/react";

function Movie({ movie }) {
  return (
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h2 className="font-bold text-large">{movie.Title}</h2>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
          <p className="text-tiny uppercase font-bold">{movie.Description}</p>
          </CardBody>
        </Card>
  );
}

export default Movie;
