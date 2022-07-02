import ItemList from "../components/ItemList/ItemList";
import SearchSection from "../components/SearchSection/SearchSection";
import PageContainerStyled from "../components/Container/PageContainer";
function Home() {
  return (
    <PageContainerStyled>
      <SearchSection />
      <ItemList />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo natus
        libero vero. Eum temporibus similique ipsum excepturi esse deserunt
        neque harum reiciendis possimus, laborum vero dicta in sint, assumenda
        labore. Labore id rem, maxime esse itaque illo perferendis pariatur,
        quae corrupti dolore cumque nemo. Quaerat voluptate voluptatibus animi
        reprehenderit ullam! Inventore neque repellendus cum voluptates quas
        suscipit, praesentium molestiae corrupti aspernatur quam velit esse
        corporis non aut excepturi doloribus ex molestias a itaque unde
        nesciunt. Quas, rem exercitationem mollitia cumque odit repellendus quia
        eum quod reiciendis sequi provident ex excepturi sit, quaerat cupiditate
        ducimus porro deserunt quo soluta earum.
      </p>
    </PageContainerStyled>
  );
}

export default Home;
