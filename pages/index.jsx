import MainLayout from "../components/layouts/MainLayout";
import { MainPaths } from '../enums/paths/main-paths';

export default function Home() {
  return (
    <MainLayout 
      title="Home"
      description="List your books"
      url={MainPaths.INDEX}
    >
      <h1>From Index</h1>
    </MainLayout>
  )
}
