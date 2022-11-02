//elevator working code implementation
const Status = {
  // Used when the elevator is idle and not moving.
  IDLE: "IDLE",
  // Used when the elevator has stopped at a current floor, but has a request to move up/down.
  IDLE_PENDING: "IDLE_PENDING",
  MOVING_UP: "MOVING_UP",
  MOVING_DOWN: "MOVING_DOWN",
};

const Direction = {
  UP: "UP",
  DOWN: "DOWN",
};

class ElevatorController {
  constructor() {
    this.state = {
      currentFloor: 0,
      status: Status.IDLE,
      requestedFloor: "",
    };
    const { status } = this.state;
    console.log(status);

    this.maxFloors = 10;
    this.setCurrentFloor = this.setCurrentFloor.bind(this);
    this.moveElevator = this.moveElevator.bind(this);
    this.setState = this.setState.bind(this);
  }
  setState() {}
  moveElevator() {}
  setCurrentFloor() {}
}

function Elevator(elevator, ...rest) {
  console.log(elevator);
}

const elevatorInstance = new ElevatorController();
const elevator = new Elevator(elevatorInstance);
