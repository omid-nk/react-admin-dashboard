function UserCardMinimal({ className = "" }) {
  return (
    <div className={`flex gap-2 ${className}`}>
      <div className="h-12 w-12 rounded">
        <img
          className="rounded"
          src={import.meta.env.BASE_URL + "images/img-avatar-default.png"}
          alt="user avatar"
        />
      </div>
      <div>
        <p className="text-text text-md cursor-default">Omid Daliri</p>
        <p className="text-text cursor-default text-sm">Admin</p>
      </div>
    </div>
  );
}

export default UserCardMinimal;
