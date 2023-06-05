import { GraphQLClient , gql  } from "graphql-request";

export const graphcms = new GraphQLClient(process.env.MAKELAR_PERANG_API)

const kategori = `
    id,
    nama,
    slug,
    warna { css }
`

const komentar = `
 id,
 nama,
 email,
 komentar
`

const post = `
    id,
    judul,
    slug,
    coverPhoto { url },
    konten { html },
    deskripsi,
    createdAt,
    updatedAt
`

export const QUERY_SLUG_CATEGORIES = gql`
{
    kategoris {
        nama,
        slug
    }
}
`


// export const QUERY_SLUG_CATEGORIES = async() => { gql`
// {
//     kategoris(){
//         nama,
//         slug
//     }
// }`

// const result = await request(graphcms , kategori)

// }