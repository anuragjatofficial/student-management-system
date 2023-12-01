import {
  AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  useDisclosure,
  useStatStyles,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

import React, { useState } from "react";
import { BeatLoader } from "react-spinners";



export default function TableRows({ e, setStudents }: any) {
  const editStudentDisclosure = useDisclosure();
  const deleteDisclosure = useDisclosure();
  const editref = React.useRef<HTMLTableRowElement | null>(null);
  const cancelRef = React.useRef<HTMLButtonElement | null>(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [delLoading,setDelLoading] = useState(false);
  const [firstName, setFirstName] = useState(e.firstname);
  const [lastName, setLastName] = useState(e.lastname);
  const [dob, setDob] = useState(e.dob);
  const [gender, setGender] = useState(e.gender);
  const [phone, setPhone] = useState(e.phone);
  const [address, setAddress] = useState(e.address);
  const baseURL = process.env.REACT_APP_API_BASE_URL;

  const toast = useToast();

  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setDelLoading(true);
    const id = e.student_id;
    axios.delete(`${baseURL}/students/${id}`).then((res)=>{
      toast({
        title: "Student Deleted.",
        description: "We've deleted student successfully",
        status: "success",
        duration: 9000,
        position: "top",
        isClosable: true,
      });
      fetchData();
    }).catch((err)=>{
        toast({
          title: "Error",
          description: err.response.data.message,
          status: "error",
          duration: 9000,
          position: "top",
          isClosable: true,
        });
    }).finally(()=>{
      setDelLoading(false);
      deleteDisclosure.onClose();
    })
  };

  const handleEditSave = () => {
    setLoading(true);
    const id = e.student_id;

    const Student = {
      firstname: firstName,
      lastname: lastName,
      dob: dob,
      gender: gender,
      phone: phone,
      address: address,
    };
    axios
      .put(`${baseURL}/students/${id}`, Student)
      .then((res) => {
        toast({
          title: "Student Updated.",
          description: "We've updated student successfully",
          status: "success",
          duration: 9000,
          position: "top",
          isClosable: true,
        });
        fetchData();
      })
      .catch((err) => {
        console.log(err);
        
        toast({
          title: "Error",
          description: err.response.data.message,
          status: "error",
          duration: 9000,
          position: "top",
          isClosable: true,
        });
      }).finally(()=>{
        setLoading(false);
        editStudentDisclosure.onClose();
      })
  };

  const fetchData = () => {
    axios.get(`${baseURL}/students`).then((res) => {
      const { data } = res;
      setStudents(data);
      console.log(data);
    });
  };

  return (
    <>
      <tr>
        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
          {e.firstname + " " + e.lastname}
        </th>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
          {e.phone}
        </td>
        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          {e.dob}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          {e.gender}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          {e.address}
        </td>
        <td>
          {/* <div className="flex gap-5"> */}
          <button
            className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={editStudentDisclosure.onOpen}
          >
            Edit
          </button>

          {/* </div> */}
        </td>
        <td>
          <button
            className="bg-red-500 text-white active:bg-red-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={deleteDisclosure.onOpen}
          >
            Delete
          </button>
        </td>
      </tr>
      <Drawer
        isOpen={editStudentDisclosure.isOpen}
        placement="right"
        onClose={editStudentDisclosure.onClose}
        finalFocusRef={editref}
        key={e.bookingId}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            _focusVisible={{
              outline: "2",
              outlineOffset: "2",
              outlineColor: "indigo",
            }}
          />
          <DrawerHeader>Edit Student</DrawerHeader>

          <DrawerBody>
            <FormLabel>StudentId</FormLabel>
            <Input placeholder="studentId" value={e.student_id} disabled />

            <FormControl className="my-5">
              <FormLabel> FirstName</FormLabel>
              <Input
                type="text"
                focusBorderColor="rgb(99 ,102 ,241 )"
                placeholder="John"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setIsDisabled(false);
                }}
              />
            </FormControl>

            <FormControl className="my-5">
              <FormLabel> LastName</FormLabel>
              <Input
                type="text"
                focusBorderColor="rgb(99 ,102 ,241 )"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  setIsDisabled(false);
                }}
              />
            </FormControl>
            <FormControl className="my-5">
              <FormLabel>Mobile No</FormLabel>
              <InputGroup
                _focus={{
                  borderColor: "rgb(99 ,102 ,241 )",
                }}
              >
                <InputLeftAddon>+91</InputLeftAddon>
                <Input
                  type="number"
                  value={phone}
                  focusBorderColor="rgb(99 ,102 ,241 )"
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setIsDisabled(false);
                  }}
                />
              </InputGroup>
            </FormControl>
            <FormControl className="my-5">
              <FormLabel>Select Gender</FormLabel>
              <Select
                focusBorderColor="rgb(99 ,102 ,241 )"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                  setIsDisabled(false);
                }}
              >
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
              </Select>
            </FormControl>

            <FormControl className="my-5">
              <FormLabel> DOB</FormLabel>
              <Input
                type="date"
                focusBorderColor="rgb(99 ,102 ,241 )"
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value);
                  setIsDisabled(false);
                }}
              />
            </FormControl>
            <FormControl className="my-5">
              <FormLabel> Addresss</FormLabel>
              <Input
                type="text"
                focusBorderColor="rgb(99 ,102 ,241 )"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                  setIsDisabled(false);
                }}
              />
            </FormControl>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={editStudentDisclosure.onClose}
              _focusVisible={{
                outline: "2",
                outlineOffset: "2",
                outlineColor: "rgb(99 ,102 ,241 )",
              }}
            >
              Cancel
            </Button>
            <Button
              bg={"rgb(99 ,102 ,241 )"}
              color={"white"}
              _focusVisible={{
                outline: "2",
                outlineOffset: "2",
                outlineColor: "rgb(99 ,102 ,241 )",
              }}
              isDisabled={isDisabled || loading}
              isLoading={loading}
              spinner={<BeatLoader size={8} color="white" />}
              onClick={handleEditSave}
            >
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <AlertDialog
        isOpen={deleteDisclosure.isOpen}
        leastDestructiveRef={cancelRef}
        onClose={deleteDisclosure.onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent bg={"white"}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Student
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={deleteDisclosure.onClose}
                _focusVisible={{
                  outline: "2",
                  outlineOffset: "2",
                  outlineColor: "red.300",
                }}
              >
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={(event) => handleDelete(event)}
                isLoading={delLoading}
                spinner={<BeatLoader size={8} color="white" />}
                _focusVisible={{
                  outline: "2",
                  outlineOffset: "2",
                  outlineColor: "red.300",
                }}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
