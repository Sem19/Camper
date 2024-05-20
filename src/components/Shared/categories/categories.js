import styles from "./categories.module.css";

const Categories = ({
  adults,
  transmission,
  ac,
  petrol,
  kitchen,
  beds,
  cd,
  radio,
  hob,
  toilet,
  shower,
  freezer,
  gas,
  water,
  microwave,
}) => {
  return (
    <div className={styles.categories}>
      <div>Adults: {adults}</div>
      <div>Transmission: {transmission}</div>
      <div>AC: {ac}</div>
      <div>Petrol: {petrol}</div>
      <div>Kitchen: {kitchen}</div>
      <div>Beds: {beds}</div>
      <div>CD: {cd}</div>
      <div>Radio: {radio}</div>
      <div>Hob: {hob}</div>
      <div>Toilet: {toilet}</div>
      <div>Shower: {shower}</div>
      <div>Freezer: {freezer}</div>
      <div>Gas: {gas}</div>
      <div>Water: {water}</div>
      <div>Microwave: {microwave}</div>
    </div>
  );
};

export default Categories;
