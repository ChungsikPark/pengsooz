import Basket from "../basket/basket.container";
import CustomBoard from "../../commons/modal/CustomBoard.modal";
import Menu from "../../commons/modal/Menu.modal";
import Select from "../../commons/modal/Select.modal";
import Blur from "../../commons/blur/Blur";
import { Dropdown } from "antd";
import {
  HeadWrapper,
  TopWrapper,
  ArrowLeftIcon,
  MenuIcon,
  BoardTitle,
  BasketWrapper,
  // BeforeBasket,
  // CurrentPage,
  // AfterBasket,
  BasketPageWrapper,
  Pages,
} from "./board.styles";

export default function BoardUI(props: any) {
  return (
    <div>
      {props.isOpen && (
        <CustomBoard
          buttonNameLeft="수정하기"
          buttonNameRight="취소하기"
          onClickRight={props.onClickCancel}
          onClickLeft={props.onClickUpdate}
          onChangeTitle={props.onChangeTitle}
          defaultValue={props.value.data().title}
          setColorCode={props.setColorCode}
        />
      )}
      {props.isModal && (
        <Select
          buttonNameLeft="예"
          buttonNameRight="아니요"
          onClickLeft={props.onClickDelete}
          onClickRight={props.onClickDeleteConfirm}
          content="정말로 삭제 하시겠습니까?"
        />
      )}
      {props.value?.data()?.title ? (
        <>
          <HeadWrapper color={props.value?.data()?.colorCode}>
            <TopWrapper>
              <ArrowLeftIcon onClick={props.onClickEnterToWS} />
              <Dropdown
                overlay={
                  <Menu
                    buttonNameTop="보드 수정하기"
                    buttonNameBottom="보드 삭제하기"
                    onClickTop={props.onClickCreateBoardModal}
                    onClickBottom={props.onClickDeleteConfirm}
                  />
                }
                trigger={["click"]}
                placement="bottomRight"
                visible={props.isMenu}
                arrow={false}
              >
                <MenuIcon onClick={props.onClickMenu} />
              </Dropdown>
            </TopWrapper>
            <BoardTitle>{props.value.data().title}</BoardTitle>
          </HeadWrapper>
          <BasketWrapper>
            {props.isMenu && <Blur />}
            {/* <BeforeBasket /> */}
            {/* <CurrentPage> */}
            <Basket boardId={props.boardId} />
            {/* </CurrentPage> */}
            {/* <AfterBasket /> */}
          </BasketWrapper>
          <BasketPageWrapper color={props.value?.data()?.colorCode}>
            <Pages src="/images/default_profile.png" />
            <Pages src="/images/default_profile.png" />
            <Pages src="/images/default_profile.png" />
            <Pages src="/images/default_profile.png" />
          </BasketPageWrapper>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
