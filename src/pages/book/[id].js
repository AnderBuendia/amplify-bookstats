const Book = ({ book }) => {
  return <div>From book id</div>;
};

export async function getServerSideProps({ params }) {
  const { id } = params;
  console.log(id);

  return {
    props: {},
  };
}

export default Book;
