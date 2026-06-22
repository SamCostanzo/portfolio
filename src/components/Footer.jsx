export default function Footer() {
  return (
    <div className="footer bg-surface">
      <div className="flex justify-between mx-auto py-8 px-8 text-light text-muted text-s">
        <p>
          Sam Costanzo - <span className="text-accent uppercase">Open to Work</span>
        </p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}
