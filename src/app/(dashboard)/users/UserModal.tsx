import Heading from "@/components/base/Heading";
import Text from "@/components/base/Text";
import Modal from "@/components/shared/Modal";
import { UserTypes } from "@/types";
import { ReactNode } from "react";

const ModelText = ({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) => {
  return (
    <Text>
      <span className="font-semibold">{name}</span> {children}
    </Text>
  );
};
const UserModal = ({
  item,
  isOpen,
  setIsOpen,
}: {
  item: UserTypes | null;
  isOpen: boolean;
  setIsOpen: (e: boolean) => void;
}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Heading variant="sm">User Details</Heading>
      <div className="mt-8 grid grid-cols-2 gap-5">
        <ModelText name="Name:">{item?.name}</ModelText>
        <ModelText name="Email:">{item?.email}</ModelText>
        <ModelText name="Phone:">{item?.phone}</ModelText>
        <ModelText name="Website:">{item?.website}</ModelText>
        <ModelText name="User Name:">{item?.username}</ModelText>
        <ModelText name="Company Name:">{item?.company.name}</ModelText>
        <ModelText name="City:">{item?.address.city}</ModelText>
        <ModelText name="street:">{item?.address.street}</ModelText>
      </div>
    </Modal>
  );
};

export default UserModal;
