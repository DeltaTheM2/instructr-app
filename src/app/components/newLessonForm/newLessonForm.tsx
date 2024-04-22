import React from "react";
import {Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Button, Link} from "@nextui-org/react";
import {Textarea} from "@nextui-org/input";
import WeekdaySelection from "@/app/components/weekdaySelection/weekdaySelection";
import CreateLessonPlan from "@/app/components/OpenAI/CreateLessonPlan";


const NewLessonForm = ({isOpen, onClose}: {isOpen:boolean; onClose: () => void}) => {
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const[duration, setDuration] = React.useState("");
    return (
       <>
           <Modal
               isOpen={isOpen}
               onClose={onClose}
               placement={"bottom"}
               backdrop={"blur"}
               size={'5xl'}
           className={'absolute inset-y-0 bottom-0'}>
                <ModalContent>
                            <ModalHeader className={'flex flex-col gap-1'}>Set up a lesson plan</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    label='Course Name'
                                    variant={'bordered'}
                                />
                                <Textarea
                                    label={'Description'}
                                    size={"lg"}
                                    variant={"bordered"}
                                />
                                <div
                                    className="flex items-center gap-4">
                                    <WeekdaySelection/>
                                    <Input
                                        label='Course Length'
                                        variant={'bordered'}
                                    />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onPress={CreateLessonPlan}>
                                    Generate
                                </Button>
                            </ModalFooter>
                </ModalContent>
           </Modal>
       </>
    );
};
export default NewLessonForm;