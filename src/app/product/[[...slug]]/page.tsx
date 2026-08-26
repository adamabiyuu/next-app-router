
type DetailProductPageProps = {
  params: {
    slug: string[];
  };
};

export default function DetailProductPage(props: DetailProductPageProps) {
  const { slug } = props.params;

  return (
    <div>
      <h1>{slug ? "Detail Product Page" : "Product Page"}</h1>
      {slug && (
        <>
          <p>Category: {slug[0]}</p>
          <p>Gender: {slug[1]}</p>
          <p>Id: {slug[2]}</p>
        </>
      )}
    </div>
  );
}


// type DetailProductPageProps = {
//   params: Promise<{
//     slug: string;
//   }>;
// };

// export default async function DetailProductPage(props: DetailProductPageProps) {
//   // Unwrapping params menggunakan await
//   const params = await props.params;

//   return (
//     <div>
//       <h1>Detail Product Page</h1>
//       <p>Product Slug: {params.slug}</p>
//     </div>
//   );
// }