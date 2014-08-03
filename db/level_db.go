package db

import (
	"fmt"
	"github.com/syndtr/goleveldb/leveldb"
	"path"
)

type LevelDB struct {
	db *leveldb.DB
}

func NewLevelDB(name string) (*LevelDB, error) {
	dbPath := path.Join(name)
	db, err := leveldb.OpenFile(dbPath, nil)
	if err != nil {
		return nil, err
	}
	database := &LevelDB{db: db}
	return database, nil
}

func (db *LevelDB) Set(key []byte, value []byte) {
	err := db.db.Put(key, value, nil)
	if err != nil {
		panic(err)
	}
}

func (db *LevelDB) Get(key []byte) []byte {

	batch := new(leveldb.Batch)
	batch.Put([]byte("foo"), []byte("value"))
	batch.Put([]byte("bar"), []byte("another value"))
	batch.Delete([]byte("baz"))
	err = db.Write(batch, nil)

	res, err := db.db.Get(key, nil)
	if err != nil {
		panic(err)
	}
	return res
}

func (db *LevelDB) GetRange(key []byte, start, end int) []byte {
}

func (db *LevelDB) Delete(key []byte) {
	err := db.db.Delete(key, nil)
	if err != nil {
		panic(err)
	}
}

func (db *LevelDB) Db() *leveldb.DB {
	return db.db
}

func (db *LevelDB) Close() {
	db.db.Close()
}

func (db *LevelDB) Print() {
	iter := db.db.NewIterator(nil, nil)
	for iter.Next() {
		key := iter.Key()
		value := iter.Value()
		fmt.Printf("[%x]:\t[%x]", key, value)
	}
}
