export default function TypesSpan({ type1, type2, type3 }) {
  return (
    <span>
      {
        type1 ?
          'Single'
        : ''
      }
      {
        type2 ?
          type1 ?
            ', Double'
          : 'Double'
        : ''
      }
      {
        type3 ?
          type2 | type1 ?
            ', Triple'
          : 'Triple'
        : ''
      }
    </span>
  );
}