interface Message {
  id: string;
  senderEmail: string;
  senderRole: string;
  receiverEmail: string;
  receiverRole: string;
  content: string;
  isResponded: boolean;
}
