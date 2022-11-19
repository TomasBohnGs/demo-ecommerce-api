import { Brand } from 'src/brand/entity/brand.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

export enum ProductStatus {
  ENABLE = 'enable',
  DISABLE = 'disable',
}

@Entity('products')
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    type: 'varchar',
  })
  model: string;

  @Column({
    nullable: false,
    type: 'varchar',
  })
  description: string;

  @Column({
    nullable: false,
    type: 'int',
  })
  price: number;

  @Column({
    nullable: true,
    type: 'int',
    default: 1,
  })
  quantity: number | null;

  @Column({
    nullable: true,
    type: 'varchar',
  })
  image: string | null;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: Date;

  @Column({
    type: 'enum',
    enum: ProductStatus,
    default: ProductStatus.ENABLE,
  })
  status: ProductStatus;

  @ManyToOne(() => Brand, (brand) => brand.name)
  @JoinColumn()
  brand: Brand;

  // @ManyToOne(type => Categories)
  // @JoinColumn()
  // categories: Categories;

  // @ManyToOne(type => Subcategories)
  // @JoinColumn()
  // subcategories: Subcategories;
}
