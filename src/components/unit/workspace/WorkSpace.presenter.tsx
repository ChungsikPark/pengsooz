import {
  Wrapper,
  TopWrapper,
  LogoutButton,
  ProfileWrapper,
  Photo,
  TextWrapper,
  DisplayName,
  Email,
  MiddleWrapper,
  Title,
  BoardsWrapper,
} from "./Workspace.styles";
import { IWorkspaceUIProps } from "./Workspace.types";
import WorkspaceWrite from "./write/WorkspaceWrite.container";
import SelectModal from "../../commons/modal/Select.modal";
import CustomBoard from "../../commons/modal/CustomBoard.modal";
import WorkspaceDetail from "./detail/WorkspaceDetail.container";

const WorkspaceUI = (props: IWorkspaceUIProps) => {
  return (
    <>
      {props.isSelectOpen && (
        <SelectModal
          onClickLeft={props.onClickLogout}
          onClickRight={props.onClickCloseLogoutModal}
          buttonNameLeft="예"
          buttonNameRight="아니요"
          content="로그아웃 하시겠습니까?"
        />
      )}
      {props.isCustomBoardOpen && (
        <CustomBoard
          onClickLeft={props.onClickCreateBoard}
          onClickRight={props.onClickCloseBoardModal}
          onChangeTitle={props.onChangeBoardTitle}
          onClickColor={props.onClickBoardColor}
          buttonNameLeft="생성하기"
          buttonNameRight="취소하기"
        />
      )}
      <Wrapper>
        <TopWrapper>
          <LogoutButton onClick={props.onClickOpenLogoutModal}>
            로그아웃
          </LogoutButton>
          <ProfileWrapper>
            {!props.userLoading && props.user && (
              <>
                <Photo
                  src={props.user?.photoURL || "/images/default_pengsooz"}
                />
                <TextWrapper>
                  <DisplayName>{props.user?.displayName}</DisplayName>
                  <Email>{props.user?.email}</Email>
                </TextWrapper>
              </>
            )}
          </ProfileWrapper>
        </TopWrapper>
        <MiddleWrapper>
          <Title>My Boards List</Title>
          <BoardsWrapper>
            {!props.boardsLoading &&
              props.boards &&
              props.boards.docs.map((doc) => (
                <WorkspaceDetail key={doc.id} boards={doc} />
              ))}
            <WorkspaceWrite setIsCustomBoardOpen={props.setIsCustomBoardOpen} />
          </BoardsWrapper>
        </MiddleWrapper>
      </Wrapper>
    </>
  );
};

export default WorkspaceUI;