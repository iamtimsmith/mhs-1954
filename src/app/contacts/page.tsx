"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Input } from "~/components/Input";
import { Button } from "~/components/Button";

const ContactsPage = () => {
  const [search, setSearch] = useState(``);
  const [contacts, setContacts] = useState([]);
  const [sort, setSort] = useState(`az`);

  const handleDelete = (key) => {
    let arr = [];
    for (let i = 0; i < contacts.length; i++) {
      if (i !== key) arr.push(contacts[i]);
    }
    localStorage.setItem(`contacts`, JSON.stringify(arr));
    setContacts(arr);
  };

  useEffect(() => {
    const json = JSON.parse(localStorage.getItem(`contacts`));
    if (json) setContacts(json);
  }, []);

  const list = search
    ? contacts.filter((contact) => {
        const s = search.toLowerCase();
        const n = contact.name.toLowerCase();
        const e = contact.email.toLowerCase();
        return n.includes(s) || e.includes(s);
      })
    : contacts;

  sort === "az"
    ? list.sort((a, b) =>
        a.name.localeCompare(b.name, "en", { sensitivity: "base" })
      )
    : list.sort((a, b) =>
        b.name.localeCompare(a.name, "en", { sensitivity: "base" })
      );

  return (
    <>
      <header className={styles.header}>
        <h1>Contacts</h1>
        {/* <button onClick={() => window.print()}><MdPrint/> Print</button> */}
        <label htmlFor="sort">
          Sort{` `}
          <select
            name="sort"
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
        </label>
      </header>
      <Input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {list.length < 1 && !search && (
        <p className={styles.warning}>
          You haven't added any contacts yet.{" "}
          <Link href="/add-contact">Add a contact</Link>
        </p>
      )}
      {list.length < 1 && search && (
        <p className={styles.warning}>
          You don't have any contacts that match your search. Perhaps you need
          to <Link href="/add-contact">Add a contact</Link>
        </p>
      )}
      <ul className={styles.list}>
        {list.map((contact, key) => (
          <li key={key}>
            <div>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
            </div>
            <Button variant="secondary" onClick={() => handleDelete(key)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactsPage;
