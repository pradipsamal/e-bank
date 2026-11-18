import "./TransactionFilters.css";

function TransactionFilters({
    search,
    setSearch,
    filterType,
    setFilterType,
}) {
    return (
        <section className="transaction-filters">
            <div className="transaction-search">
                <span>⌕</span>

                <input
                    type="text"
                    placeholder="Search by account number, holder name or transaction ID"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
            </div>

            <div className="transaction-filter-buttons">
                <button
                    className={filterType === "All" ? "active" : ""}
                    onClick={() => setFilterType("All")}
                >
                    All
                </button>

                <button
                    className={filterType === "Credit" ? "active" : ""}
                    onClick={() => setFilterType("Credit")}
                >
                    Credit
                </button>

                <button
                    className={filterType === "Debit" ? "active" : ""}
                    onClick={() => setFilterType("Debit")}
                >
                    Debit
                </button>
            </div>
        </section>
    );
}

export default TransactionFilters;