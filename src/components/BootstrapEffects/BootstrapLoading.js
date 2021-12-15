import { Spinner, Button } from "react-bootstrap";
import './BootstrapLoading.styles.scss'

const BootstrapLoading = () => {
  return (
    <div className="toMiddle">
      <Button className ="toMiddle" variant="primary" disabled>
        <Spinner 
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </div>
  );
};

export default BootstrapLoading;
