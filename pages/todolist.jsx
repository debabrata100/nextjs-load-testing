const fetchTodos = async function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      const todos = Array.from({ length: 5 }, (_, i) => i).map((id) => {
        return {
          id,
          name: `Todo - ${id}`,
        };
      });
      resolve(todos);
    }, 2000);
  });
};

export async function getServerSideProps(context) {
  const todos = await fetchTodos();
  console.log({ todos });
  return {
    props: {
      todos,
    },
  };
}

export default function TodoList({ todos }) {
  return (
    <div className="todolist">
      <h1>Todo List Page</h1>
      <ul>
        {todos.map(({ name, id }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </div>
  );
}
