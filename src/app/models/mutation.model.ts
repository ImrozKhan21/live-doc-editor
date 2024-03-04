import {gql} from "apollo-angular";

export const UPDATE_DOCUMENT = gql`
  mutation UpdateDocument($updateDocumentId: ID!, $title: String, $content: String) {
  updateDocument(id: $updateDocumentId, title: $title, content: $content) {
    _id
    content
    owner {
      _id
      email
      username
    }
    title
  }
}
`;
