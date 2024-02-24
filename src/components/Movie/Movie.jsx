import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";

function Movie({ movie, onDeleteMovie }) {
  return (
    <Card className="py-4">
      <Button
        isIconOnly
        color="danger"
        aria-label="Like"
        onClick={() => onDeleteMovie(movie.Id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-video-off"
        >
          <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path>
          <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>
      </Button>
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
