export default function UserCard({ user }) {
  return (
    <section className="user-display">
      <span>
        Name: {user.first_name} {user.last_name}
      </span>
      <p>Gender: {user.gender}</p>
      <p>Email: {user.email}</p>
    </section>
  );
}
