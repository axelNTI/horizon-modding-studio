interface ModPageProps {
  local_path: string;
}

export default ({ local_path }: ModPageProps) => {
  const path = decodeURIComponent(local_path);
  return <p>{path}</p>;
};
