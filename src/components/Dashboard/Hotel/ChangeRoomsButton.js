import Button from '../../Form/Button';

export default function ChangeRoomsButton({ setChangeRooms }) {
  function handleSubmit() {
    setChangeRooms(true);
  }
  return <Button onClick={handleSubmit}>Trocar de quarto</Button>;
}
