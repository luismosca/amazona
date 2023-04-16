import Spinner from 'react-bootstrap/Spinner';

export default function LoadingBox() {
  return (
    <Spinner animation="border" role="status">
      <sapn clasName="visually-hidden">Loading...</sapn>
    </Spinner>
  );
}
