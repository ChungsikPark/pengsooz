import { ChangeEvent, KeyboardEvent } from "react";
import {
  CommentTitle,
  CommentsInnerDiv,
  CommentContentsInput,
  CommentsWriteDiv,
  EnterIcon,
} from "./commentsWrite.styles";

interface ICommentsWriteUI {
  colorCode: string;
  onClickSubmit: () => Promise<void>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
  contents: string;
}

export default function CommentsWriteUI(props: ICommentsWriteUI) {
  return (
    <CommentsWriteDiv>
      <CommentTitle>λκΈ μμ±</CommentTitle>
      <CommentsInnerDiv>
        <CommentContentsInput
          onChange={props.onChange}
          value={props.contents}
          maxLength={50}
          onKeyPress={props.onKeyPress}
        />
        <EnterIcon onClick={props.onClickSubmit} color={props.colorCode} />
      </CommentsInnerDiv>
    </CommentsWriteDiv>
  );
}
