import { ReactNode, useEffect } from "react";
import { Authenticated } from "../components/Authenticated";
import { HomePageContent } from "../content/home";
import { DefaultLayout } from "../layout/DefaultLayout/DefaultLayout";
import { NextPageWithLayout } from "../types/next.types";
import { useRouter } from "next/router";

const Home: NextPageWithLayout = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/movies?page=1");
  }, []);
  return (
    <>
      <HomePageContent />
    </>
  );
};

Home.getLayout = (page: ReactNode) => {
  return (
    <Authenticated>
      <DefaultLayout>{page}</DefaultLayout>
    </Authenticated>
  );
};

export default Home;
