import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";

export default function ContactList() {
  const selectNameFilter = useSelector(state => state.filters.name);
  const selectContacts = useSelector(state => state.contacts.items);

  const filterContact = selectContacts.filter(elem =>
    elem.name.toLowerCase().includes(selectNameFilter.toLowerCase().trim())
  );
  return (
    <div className={css.contactListWrapper}>
      {filterContact.map(elem => (
        <div key={elem.id}>
          <Contact contact={elem} />
        </div>
      ))}
    </div>
  );
}
