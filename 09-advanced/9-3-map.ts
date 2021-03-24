{
    type Video = {
        title: string;
        author: string;
    }

    type Optional<T> = {
        [P in keyof T]?: T[P];
    }

    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P];
    }

    type VideoOptional = Optional<Video>;

    const videoOp: VideoOptional = {
        title: 'hi'
    }

    type Animal = {
        name: string;
        age: number;
    }

    const animal: Optional<Animal> = {
        name: 'dog'
    }

    const video: ReadOnly<Video> = {
        title: 'Boy',
        author: 'Jane'
    }

    type Nullable<T> = {
        [P in keyof T]: T[P] | null;
    }
    const obj2: Nullable<Video> = {
        title: 'hi',
        author: null
    }



    type Proxy<T> = {
        get(): T;
        set(value: T): void;
    }

    type Proxify<T> = {
        [P in keyof T]: Proxy<T[P]>;
    }

}